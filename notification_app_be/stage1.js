const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkZXYuMjNiMTUzMTA2MkBhYmVzLmFjLmluIiwiZXhwIjoxNzgwOTg3NzYwLCJpYXQiOjE3ODA5ODY4NjAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5Y2JmNDc3NS01NWRlLTRiMWUtYmIyOC0wMTc4OWZjYzU1MTYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJkZXYga3VzaHdhaGEiLCJzdWIiOiIwYWFmZmJlOS1lMzVhLTQ0YjktYjMyYy04NTRiMTFjMDAyYzkifSwiZW1haWwiOiJkZXYuMjNiMTUzMTA2MkBhYmVzLmFjLmluIiwibmFtZSI6ImRldiBrdXNod2FoYSIsInJvbGxObyI6IjIzMDAzMjE1MzAwNjYiLCJhY2Nlc3NDb2RlIjoiY1h1cWh0IiwiY2xpZW50SUQiOiIwYWFmZmJlOS1lMzVhLTQ0YjktYjMyYy04NTRiMTFjMDAyYzkiLCJjbGllbnRTZWNyZXQiOiJBZkRVWER1c2tBVENiTWRyIn0.om_40gzgOzpuRHGUYj_0RmKwV0Tb3nBF00lCqux-pZA";

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