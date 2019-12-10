class VerifiedAlert < ApplicationRecord
    validates :email, :word, :authentication_token, presence: true


end