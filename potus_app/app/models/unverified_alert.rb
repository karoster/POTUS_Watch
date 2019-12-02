class UnverifiedAlert < ApplicationRecord
    validates :email, :words, :verification_token, presence: true
    validates :email, :verification_token, uniqueness: true
    after_initialize :ensure_verification_token

    def ensure_verification_token
        self.verification_token ||= SecureRandom.urlsafe_base64
    end

end