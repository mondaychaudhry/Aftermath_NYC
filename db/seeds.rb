# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create(username: 'user1', email: 'sobaata@gmail.com', password_digest: '123')
u2 = User.create(username: 'user2', email: 'sob@mail.com', password_digest: '123')
u3 = User.create(username: 'user3', email: 'sobaat@gail.com', password_digest: '123')
u4 = User.create(username: 'user4', email: 'obaata@gmai.com', password_digest: '123')
u5 = User.create(username: 'user5', email: 'sota@gmil.com', password_digest: '123')
u6 = User.create(username: 'user6', email: 'aata@gail.com', password_digest: '123')
u7 = User.create(username: 'user7', email: 'sobaaa@gmil.com', password_digest: '123')
u8 = User.create(username: 'user8', email: 'soata@gmai.com', password_digest: '123')
u9 = User.create(username: 'user9', email: 'sata@gmal.com', password_digest: '123')
u10 = User.create(username: 'user10', email: 'soaata@gmil.com', password_digest: '123')
u11 = User.create(username: 'user11', email: 'sta@mail.com', password_digest: '123')

#CR

c1 = Community.create(title: 'Project safe', description: 'Empowering survivors of violence to find safety, support, hope and connection. Offering free lock changes, must be referred by a social worker.', contact: '347-328-8069', category: 'Home Services', user_id: u1.id)

c2 = Community.create(title: 'Project safe', description: 'Empowering survivors of violence to find safety, support, hope and connection. Offering free lock changes, must be referred by a social worker.', contact: '347-328-8069', category: 'Home Services', user_id: u2.id)

c3 = Community.create(title: 'Project safe', description: 'Empowering survivors of violence to find safety, support, hope and connection. Offering free lock changes, must be referred by a social worker.', contact: '347-328-8069', category: 'Home Services', user_id: u3.id)

c4 = Community.create(title: 'Project safe', description: 'Empowering survivors of violence to find safety, support, hope and connection. Offering free lock changes, must be referred by a social worker.', contact: '347-328-8069', category: 'Home Services', user_id: u4.id)

#journal entries
j1 = Journal.create(title: "1", entry: "today sucks", user_id: u1.id)
j2 = Journal.create(title: "1", entry: "today sucks less", user_id: u1.id)
j3 = Journal.create(title: "1" , entry: "today sucks more", user_id: u1.id)
j4 = Journal.create(title: "1", entry: "today sucks", user_id: u1.id)
j5 = Journal.create(title: "1", entry: "today sucks", user_id: u2.id)
j6 = Journal.create(title: "1", entry: "today sucks more", user_id: u2.id)
j7 = Journal.create(title: "1", entry: "today sucks less", user_id: u2.id)
j8 = Journal.create(title: "1", entry: "today sucks", user_id: u2.id)
j9 = Journal.create(title: "1", entry: "today sucks", user_id: u3.id)
j10 = Journal.create(title: "1", entry: "today sucks", user_id: u3.id)
j11 = Journal.create(title: "1", entry: "today sucks", user_id: u3.id)
j12 = Journal.create(title: "1", entry: "today sucks", user_id: u3.id)

#pictures

p1 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u1.id)

p2 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u1.id)

p3 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u1.id)

p4 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u2.id)
p5 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u2.id)
p6 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u2.id)

p7 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u3.id)

p8 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u3.id)

p8 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u3.id)


