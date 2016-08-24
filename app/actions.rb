# Homepage (Root path)
get '/' do
  erb :app
end

get '/contacts' do
  Contact.all.to_json
end

post '/contacts' do  
  new_contact = Contact.new(params)
  
  if new_contact.save
    {success: true, id: new_contact.id}.to_json
  else
    {success: false}.to_json
  end
end