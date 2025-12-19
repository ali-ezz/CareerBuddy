import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const q = req.query || {};
    const params = new URLSearchParams();

    // support either `keyword` or `search`
    const search = q.search || q.keyword;
    if (search) params.set('search', search);

    if (q.category) params.set('category', q.category);
    if (q.company_name) params.set('company_name', q.company_name);

    const limit = q.limit || 20;
    params.set('limit', String(limit));

    const url = `https://remotive.com/api/remote-jobs?${params.toString()}`;
    const jobRes = await fetch(url);
    const data = await jobRes.json();

    const jobsList = Array.isArray(data.jobs) ? data.jobs : [];

    const responsePayload = {
      jobs: jobsList,
      jobCount: data['job-count'] ?? jobsList.length,
      totalJobCount: data['total-job-count'] ?? null,
      warning: data['00-warning'] || null,
      legalNotice: data['0-legal-notice'] || null,
      sourceUrl: url,
    };

    res.status(200).json(responsePayload);
  } catch (err) {
    console.error('Remotive API error:', err);
    res.status(500).json({ error: 'Remotive API error', details: err.message });
  }
}
