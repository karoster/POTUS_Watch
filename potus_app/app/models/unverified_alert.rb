class UnverifiedAlert < ApplicationRecord
    validates :email, :words, :verification_token, presence: true
    validates :email, :verification_token, uniqueness: true
    validate :valid_email_format, :valid_word_format 
    after_initialize :ensure_verification_token

    # ensures email is properly formatted.
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    # only matches strings that have no whitespace. Frontend ensures words will 
    # be formatted like this. Only mallicious requests can have whitespace.
    VALID_WORD_REGEX = /^\S*$/i 


    def ensure_verification_token
        self.verification_token ||= SecureRandom.urlsafe_base64
    end

    def valid_word_format
        self.words.each do |word|
            if word.length > 20
                errors.add(:words, "can't be longer than 20 characters")
            elsif !word.match(VALID_WORD_REGEX)
                errors.add(:words, ": each keyword must only be a single word.")
            end
        end
        errors.add(:words, "must not contain more than 5 keywords") if self.words.length > 5

    end

    def valid_email_format
        if !self.email.match(VALID_EMAIL_REGEX)
            errors.add(:email, "must be properly formatted")
        end
    end

end