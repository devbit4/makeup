export default (req, res) => {
  res.setHeader('Set-Cookie', 'user_name=user;Max-Age=0;');
  res.statusCode = 200;
  res.json({ message: 'ok' });
};
