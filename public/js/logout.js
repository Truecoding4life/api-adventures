const logout = () => {
this.session.destroy(() => {
  document.location.replace('/');
  console.log('You are now logged out');
});
};

document.querySelector('#logout').addEventListener('click', logout);

