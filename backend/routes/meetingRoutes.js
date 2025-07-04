import express from 'express';
import multer from 'multer';
import { processMeeting } from '../controllers/meetingController.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), processMeeting);

export default router;