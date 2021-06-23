const path = require('path');
const os = require('os');
const fs = require('fs');
// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다

const workingDir = path.join(__dirname, 'test');

// 2. 그 폴더 안에 video, captured, duplicated 폴더를 만든다

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더 안에 있는 파일들을 다 돌면서 해당하는 비디오(mp4, mov), 캡쳐(png, aae), duplicated 파일을 분류한다.
