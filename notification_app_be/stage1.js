const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkZXYuMjNiMTUzMTA2MkBhYmVzLmFjLmluIiwiZXhwIjoxNzgwOTg2MjU0LCJpYXQiOjE3ODA5ODUzNTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJjNzFkNmQ1Ni0yZjIxLTQxZmYtODliNi1hODFkODY4ZWNmMmIiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJkZXYga3VzaHdhaGEiLCJzdWIiOiIwYWFmZmJlOS1lMzVhLTQ0YjktYjMyYy04NTRiMTFjMDAyYzkifSwiZW1haWwiOiJkZXYuMjNiMTUzMTA2MkBhYmVzLmFjLmluIiwibmFtZSI6ImRldiBrdXNod2FoYSIsInJvbGxObyI6IjIzMDAzMjE1MzAwNjYiLCJhY2Nlc3NDb2RlIjoiY1h1cWh0IiwiY2xpZW50SUQiOiIwYWFmZmJlOS1lMzVhLTQ0YjktYjMyYy04NTRiMTFjMDAyYzkiLCJjbGllbnRTZWNyZXQiOiJBZkRVWER1c2tBVENiTWRyIn0.r5TrY0XLBcBGfVpZfEjhHXSoYTFGfd-UoaelDSD-q7M";

async function getNotifications() {
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    const data = await response.json();

    const weight = {
      Placement: 3,
      Result: 2,
      Event: 1
    };

    const topNotifications = data.notifications
      .sort((a, b) => {
        if (weight[b.Type] !== weight[a.Type]) {
          return weight[b.Type] - weight[a.Type];
        }

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      })
      .slice(0, 10);

    console.log("\nTOP 10 PRIORITY NOTIFICATIONS\n");
    console.table(topNotifications);

  } catch (error) {
    console.error(error);
  }
}

getNotifications();