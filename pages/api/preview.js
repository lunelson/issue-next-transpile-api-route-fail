export default async function preview(req, res) {
  res.setPreviewData({});

  res.redirect(req.query.path);
}
