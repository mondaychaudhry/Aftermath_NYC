class JournalSerializer < ActiveModel::Serializer
  attributes :id, :title, :entry
  has_one :user
end
