export const SUBMIT_ARTICLE = 'submit_article';

export function submitArticle(values, id) {
  const payload = {};
  payload[id] = { id, content: values.content };
  return {
    type: SUBMIT_ARTICLE,
    payload: payload
  };
}
