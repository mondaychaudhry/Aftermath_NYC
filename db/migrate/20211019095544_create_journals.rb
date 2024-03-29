class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.string :title
      t.string :entry
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
