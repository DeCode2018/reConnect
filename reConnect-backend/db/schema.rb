# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_18_221307) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contacts", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "contact_avatar"
    t.string "category"
    t.string "last_event_date"
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "cell_num"
    t.string "email_address"
    t.string "relationship"
    t.string "home_address"
    t.string "home_city"
    t.string "home_state"
    t.string "home_zip"
    t.string "company_name"
    t.string "job_title"
    t.string "company_address"
    t.string "company_state"
    t.string "company_city"
    t.string "company_zip"
    t.date "bday"
    t.text "notes"
    t.string "first_name"
    t.string "last_name"
    t.index ["user_id"], name: "index_contacts_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.bigint "user_id"
    t.string "name"
    t.string "description"
    t.string "location"
    t.string "event_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "contact_id"
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "password"
    t.string "avatar"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
