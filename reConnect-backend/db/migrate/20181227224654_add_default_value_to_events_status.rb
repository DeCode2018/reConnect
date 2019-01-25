class AddDefaultValueToEventsStatus < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :status, :boolean, default: false
  end
end
