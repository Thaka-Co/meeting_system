export default function handler(req, res) {
  // res.status(200).json({ data: req.body });
  console.log(req.method);
  console.log(req.body);
  res.writeHead(301, {
    location: "/meetins",
  });
  // if (req.method === 'POST') {
  //     //create Meeting
  //     console.log(req.body)
  // }
  // if (req.method === 'PUT') {
  //     //update meeting
  // }

  // if (req.method === 'GET') {
  //     //getmeetins

  // }
  // if (req.method === 'DELETE') {
  //     // Delete Meeting
  // }
}
