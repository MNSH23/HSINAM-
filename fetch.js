<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch User Limit</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            min-height: 100vh;
        }

        .container {
            background-color: whitesmoke;
            padding: 2em;
            margin-top: 2em;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            width: 90%;
            max-width: 600px;
        }

        h1 {
            text-align: center;
            color: black;
        }

        #inp {
            width: 100%;
            padding: 10px;
            margin: 1em 0;
            font-size: 16px;
            border: 2px solid #ddd;
            border-radius: 5px;
            box-sizing: border-box;
        }

        button {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            background-color: #007acc;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #092a83;
        }

        #second {
            margin-top: 1.5em;
        }

        .post {
            border: 1px solid #ccc;
            padding: 1em;
            margin-bottom: 1em;
            border-radius: 5px;
            background-color: #f9f9f9;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            animation: fadeIn 0.7s;
        }

        .post:hover {
            transform: scale(1.02);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .post h4 {
            margin: 0 0 0.5em;
            color: black;
        }

        .post p {
            margin: 0;
            color: #333;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
        }
    </style>
</head>

<body>

    <div class="container">
        <h1>MNISH FETCH</h1>
        <input type="number" id="inp" placeholder="Enter limit">
        <button onclick="GetData()">Load</button>
        <div id="second"></div>
    </div>

    <script>
        async function GetData() {
            const target = document.getElementById("second");
            const input = document.getElementById("inp");
            const limit = input.value;
            target.innerHTML = "";

            if (!limit || limit < 1) {
                target.innerHTML = "<p style='color:red;'>Please enter a valid number.</p>";
                return;
            }

            target.innerHTML = "<p style='color: #007acc;'>Loading...</p>";

            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
                const data = await res.json();
                target.innerHTML = "";
                data.forEach(post => {
                    const tempDiv = document.createElement("div");
                    tempDiv.classList.add("post");

                    const temph4 = document.createElement("h4");
                    const tempp = document.createElement("p");

                    temph4.textContent = post.title;
                    tempp.textContent = post.body;

                    tempDiv.appendChild(temph4);
                    tempDiv.appendChild(tempp);

                    target.appendChild(tempDiv);
                });
                input.value = "";
            } catch (error) {
                target.innerHTML = "<p style='color:red;'>Failed to fetch data.</p>";
            }
        }
    </script>

</body>

</html>
