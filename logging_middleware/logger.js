const LOG_API = "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkZXYuMjNiMTUzMTA2MkBhYmVzLmFjLmluIiwiZXhwIjoxNzgwOTg2MjU0LCJpYXQiOjE3ODA5ODUzNTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJjNzFkNmQ1Ni0yZjIxLTQxZmYtODliNi1hODFkODY4ZWNmMmIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJkZXYga3VzaHdhaGEiLCJzdWIiOiIwYWFmZmJlOS1lMzVhLTQ0YjktYjMyYy04NTRiMTFjMDAyYzkifSwiZW1haWwiOiJkZXYuMjNiMTUzMTA2MkBhYmVzLmFjLmluIiwibmFtZSI6ImRldiBrdXNod2FoYSIsInJvbGxObyI6IjIzMDAzMjE1MzAwNjYiLCJhY2Nlc3NDb2RlIjoiY1h1cWh0IiwiY2xpZW50SUQiOiIwYWFmZmJlOS1lMzVhLTQ0YjktYjMyYy04NTRiMTFjMDAyYzkiLCJjbGllbnRTZWNyZXQiOiJBZkRVWER1c2tBVENiTWRyIn0.r5TrY0XLBcBGfVpZfEjhHXSoYTFGfd-UoaelDSD-q7M";

async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(LOG_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message
      })
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = Log;