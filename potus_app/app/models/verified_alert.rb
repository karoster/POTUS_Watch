class VerifiedAlert < ApplicationRecord
    validates :email, :word, :authentication_token, presence: true
    validates :authentication_token, uniqueness: true


end