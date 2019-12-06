class VerifiedAlert < ApplicationRecord
    validates :email, :word, presence: true


end