# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Course.create(name: '第一课', teather: '李晋', time: Time.now)
Course.create(name: '第二课', teather: '李晋', time: Time.now + 7.days)

Student.create(name: '雷力', phone: '15829388157', wallet_address: 'qUMP1zyobZF87GwmhfBTfALRNJTT4QUPRD')
Student.create(name: '雷力1', phone: '18629377781', wallet_address: 'qbhdodiTyNPs9RmG8jQurmXXX5At5sDMWQ')