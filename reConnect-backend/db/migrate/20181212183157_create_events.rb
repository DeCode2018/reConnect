class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.belongs_to :user, index: true
      t.string :name
      t.string :description
      t.string :location
      t.string :event_date

      t.timestamps
    end
  end
end
