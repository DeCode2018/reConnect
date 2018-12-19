class Api::V1::ContactsController < ApplicationController
  before_action :set_contact, only: [:show,:update,:destroy]

    def index
      contacts = Contact.all
      render json: contacts, status: 200
    end

    def create
      contact = Contact.create!(contact_params)

      render json: contact, status: 201
    end

    def update
      @contact.update(contact_params)
      render json: @contact, status: 200
    end

    def destroy
      contactId = @contact.id
      @contact.destroy
      render json: @contact
    end

    def show
      render json: @contact, status: 200
    end

    private
    def contact_params

      params.require(:contact).permit(:name, :contact_avatar, :category, :last_event_date, :user_id, :first_name, :last_name, :relationship, :home_address, :home_city, :home_state, :home_zip, :company_name, :job_title, :company_address, :company_city, :company_state, :company_zip, :cell_num, :email_address, :notes, :bday)
    end

    def set_contact
      @contact = Contact.find(params[:id])
    end

end
