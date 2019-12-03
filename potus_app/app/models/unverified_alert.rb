class UnverifiedAlert < ApplicationRecord
    validates :email, :words, :verification_token, presence: true
    validates :email, :verification_token, uniqueness: true
    validate :valid_email_format, :valid_word_format 
    after_initialize :ensure_verification_token

    def ensure_verification_token
        self.verification_token ||= SecureRandom.urlsafe_base64
    end

    def vaild_word_format
        self.words.each do |word|
            if word.length > 20
                errors.add(:words, "can't be longer than 20 characters")
            elsif !word.match(/(?<=^[\s"']*)(\w+)/)
                errors.add(:words, ": each keyword must only be a single word.")
            end
        end
    end

    def valid_email_format
        if !self.email.match(/(?:[a-z0-9!/#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!/#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)
            errors.add(:email, "must be properly formatted")
        end
    end

end