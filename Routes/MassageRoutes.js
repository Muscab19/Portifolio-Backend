const express = require('express');
const router = express.Router();
const Message = require('../Models/MassageSchema'); // Adjust the path if needed

// POST route to handle form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({ name, email, message });

    // Save the message to the database
    await newMessage.save();

    return res.json({ success: true, msg: 'Message sent successfully' });
  } catch (error) {
    return res.json({ success: false, error: 'Failed to send message' });
  }
});

// Route to get all messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ date: -1 });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to fetch messages' });
  }
});

// DELETE route to delete a message by ID
router.delete('/delete/messages/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Message.findByIdAndDelete(id);
      return res.status(200).json({ success: true, msg: 'Message deleted successfully' });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Failed to delete message' });
    }
  });
  

module.exports = router;
