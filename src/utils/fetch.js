export default async function request(nodeId) {
  try {
    const res = await fetch('url');

    if (!res.ok) throw new Error('서버 오류');

    return res.json();
  } catch (error) {
    throw new Error(`에러 발생 ${e.message}`);
  }
}
