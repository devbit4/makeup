export default (req, res) => {
  res.setHeader('Set-Cookie', 'a_name=user;Max-Age=0;');
  res.statusCode = 200;
  res.json({ message: 'ok' });
};
