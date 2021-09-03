const { basePath } = require('../../constants');

export default async function preview(req, res) {
  res.setPreviewData({});
  res.redirect(req.query.path || basePath);
}
