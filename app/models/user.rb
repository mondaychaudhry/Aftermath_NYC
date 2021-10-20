class User < ApplicationRecord
    has_many :photos, dependent: :destroy
    has_many :journals, dependent: :destroy
    has_many :communities, dependent: :destroy
    
    # validates :username, presence: true  
    # validates :password, presence: true 
    # has_secure_password
end
