const { basePath } = require('../../constants');

export default async function exitPreview(req, res) {
  res.clearPreviewData();
  res.redirect(req.query.path || basePath);
}
