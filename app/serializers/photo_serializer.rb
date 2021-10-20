class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :entry
  has_one :user
end
