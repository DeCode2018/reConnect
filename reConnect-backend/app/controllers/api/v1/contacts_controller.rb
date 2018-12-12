class Api::V1::ContactsController < ApplicationController
  before_action :set_contact, only: [:show,:update,:destroy]

    def index
      contacts = Contact.all
      render json: contacts, status: 200
    end

    def create
      contact = Contact.create(contact_params)
      render json: contact, status: 201
    end

    def update
      @contact.update(contact_params)
      render json: @contact, status: 200
    end

    def destroy
      contactId = @contact.id
      @contact.destroy
      render json: {message:"Zap! Contact deleted", contactId:contactId}
    end

    def show
      render json: @contact, status: 200
    end

    private
    def contact_params
      params.permit(:name, :contact_avatar, :category, :last_event_date, :user_id)
    end

    def set_contact
      @contact = Contact.find(params[:id])
    end

end
