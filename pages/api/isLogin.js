export default function handler(req, res) {
  res.status(200).json({ name: req.cookies.user_name });
}
