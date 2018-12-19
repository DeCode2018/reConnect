class AddColumToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :contact_id, :integer
  end
end
