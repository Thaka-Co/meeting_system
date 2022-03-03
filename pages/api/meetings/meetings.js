

export default function handler(req, res) {
    res.status(200).json({ name: "Meeting Stuff gose in here" });
    if (req.method === 'POST') {
        //create Meeting
    }
    if (req.method === 'PUT') {
        //update meeting
    }

    if (req.method === 'GET') {
        //getmeetins

    }
    if (req.method === 'DELETE') {
        // Delete Meeting
    }

}