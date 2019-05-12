reducer -> modules trong vuex
reducer chứa các state -> state vuex
reducer chứa các actions được gọi thông qua constants từ đó thực hiện hành động ảnh hưởng đối với state

middleware nằm giữa reducer và dispatch Actions
-> cần thư viên khác là redux-thunk hoặc redux-saga
hay redux-promise

vị trí hoạt động của middleware:
trước khi reducers nhận được action
sau khi action đã được dispatch

thường sử lý async action (API request)
