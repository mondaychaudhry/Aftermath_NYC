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

c1 = Community.create(title: 'Project Safe', description: 'Empowering survivors of violence to find safety, support, hope and connection. Offering free lock changes, must be referred by a social worker.', contact: '347-328-8069', category: 'Home Services', user_id: u1.id)

c2 = Community.create(title: 'Safe Horizons', description: 'A nationwide network dedicated to providing services for survivors of sexual assault. Offering emergency housing, must be referred by a social worker.', contact: '347-328-8069', category: 'Emergency Housing', user_id: u2.id)

c3 = Community.create(title: 'Lucy Danila', description: 'I am a stay at home mom to two wonderful children. I am fluent in English and Spanish. Please contact me if you require a translator for managing this difficult time. Can accompany you to the hospital, help you with paperwork related to this, etc', contact: '555-555-5555', category: 'Translation Services', user_id: u3.id)

c4 = Community.create(title: 'Lyft', description: 'Transportation service. Will provide free rides to local emergency room for survivors of assualt. Please email us for the promo code', contact: 'assist@lyft.com', category: 'Transportation Services', user_id: u4.id)

c5 = Community.create(title: 'Acacia Bokwa', description: 'I am a licensed therapist who works predominantly with the LGBQT+ community, and can offer up to 3 free sessions of counseling to help survivors of sexual violence. Please send me an email and stay strong!', contact: 'acba@rmail.com', category: 'Mental Health', user_id: u4.id)

#journal entries
j1 = Journal.create(title: "ER Visit", entry: "Waiting for results, swab kit completed, #949504. Social worker will follow up with counseling sessions/aftercare.", user_id: u1.id)
j2 = Journal.create(title: "Police Report", entry: "Spoke to Officer Dega, who will follow up with next week. Police took my clothing as evidence so had to call Rory to bring me clothes from home. Call 555-555-555 with any new information. Case #90490394.", user_id: u1.id)
j3 = Journal.create(title: "Something Happened" , entry: "Woke up somewhere I did not recognize and don't remember much from happened before. Can't find my snake necklace or diamond earrings. No one was around so I had to figure out how to get home. Clothes were torn and had brusies on arms and neck. Decided to go to hospital.", user_id: u1.id)
j4 = Journal.create(title: "Help", entry: "I haven't gone out since the incident last weekend. It's only been a week, but I still feel so violated. What if someone drugged me? What if I have HIV? What if it happens again? I feel so out of control. I am spiralling and need help.", user_id: u1.id)
j5 = Journal.create(title: "ER Visit", entry: "Waiting for results, swab kit completed, #949504. Social worker will follow up with counseling sessions/aftercare.", user_id: u2.id)
j6 = Journal.create(title: "Police Report", entry: "Spoke to Officer Dega, who will follow up with next week. Call 555-555-555 with any new information. Case #90490394.", user_id: u2.id)
j7 = Journal.create(title: "Something Happened" , entry: "Woke up somewhere I did not recognize and don't remember much from happened before. Can't find my snake necklace or diamond earrings. No one was around so I had to figure out how to get home. Clothes were torn and had brusies on arms and neck. Decided to go to hospital.", user_id: u2.id)
j8 = Journal.create(title: "Help", entry: "I haven't gone out since the incident last weekend. It's only been a week, but I still feel so violated. What if someone drugged me? What if I have HIV? What if it happens again? I feel so out of control. I am spiralling and need help.", user_id: u2.id)
j9 = Journal.create(title: "ER Visit", entry: "Waiting for results, swab kit completed, #949504. Social worker will follow up with counseling sessions/aftercare.", user_id: u3.id)
j10 = Journal.create(title: "Police Report", entry: "Spoke to Officer Dega, who will follow up with next week. Call 555-555-555 with any new information. Case #90490394.", user_id: u3.id)
j11 = Journal.create(title: "Something Happened" , entry: "Woke up somewhere I did not recognize and don't remember much from happened before. Can't find my snake necklace or diamond earrings. No one was around so I had to figure out how to get home. Clothes were torn and had brusies on arms and neck. Decided to go to hospital.", user_id: u3.id)
j12 = Journal.create(title: "Help", entry: "I haven't gone out since the incident last weekend. It's only been a week, but I still feel so violated. What if someone drugged me? What if I have HIV? What if it happens again? I feel so out of control. I am spiralling and need help.", user_id: u3.id)

#pictures

p1 = Photo.create(title: "Dove", entry: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg/1200px-Treron_vernans_male_-_Kent_Ridge_Park.jpg', user_id: u1.id)
p2 = Photo.create(title: "Quail", entry: 'https://www.thespruce.com/thmb/_QrZimvf4wO8u1s4nvK5ufK2kAE=/2975x2975/smart/filters:no_upscale()/california-quail-1144204174-973456a5aeb94eac981a0f018f618cf3.jpg', user_id: u1.id)
p3 = Photo.create(title: "Crow", entry: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg', user_id: u2.id)

p4 = Photo.create(title: "Dove", entry: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Treron_vernans_male_-_Kent_Ridge_Park.jpg/1200px-Treron_vernans_male_-_Kent_Ridge_Park.jpg', user_id: u2.id)
p5 = Photo.create(title: "Quail", entry: 'https://www.thespruce.com/thmb/_QrZimvf4wO8u1s4nvK5ufK2kAE=/2975x2975/smart/filters:no_upscale()/california-quail-1144204174-973456a5aeb94eac981a0f018f618cf3.jpg', user_id: u2.id)
p6 = Photo.create(title: "Crow", entry: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg', user_id: u2.id)

p7 = Photo.create(title: "1", entry: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg', user_id: u3.id)
p8 = Photo.create(title: "Quail", entry: 'https://www.thespruce.com/thmb/_QrZimvf4wO8u1s4nvK5ufK2kAE=/2975x2975/smart/filters:no_upscale()/california-quail-1144204174-973456a5aeb94eac981a0f018f618cf3.jpg', user_id: u3.id)
p9 = Photo.create(title: "Crow", entry: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Corvus_corone_-near_Canford_Cliffs%2C_Poole%2C_England-8.jpg', user_id: u3.id)


