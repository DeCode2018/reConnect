class CreateContacts < ActiveRecord::Migration[5.2]
  def change
    create_table :contacts do |t|
      t.belongs_to :user, index: true
      t.string :name
      t.string :contact_avatar
      t.string :category
      t.string :last_event_date
      t.string :date

      t.timestamps
    end
  end
end
