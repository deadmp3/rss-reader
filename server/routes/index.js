import fs from 'mz/fs';
import axios from 'axios';

export default router => router
  .get('/', async (ctx) => {
    ctx.body = await fs.readFile('/index.html', 'utf8');
    ctx.status = 200;
  })
  .post('/rss', ctx =>
    axios.get(ctx.request.body.url)
      .then((res) => {
        ctx.body = res.data;
      })
      .catch(err => console.log(err)));
