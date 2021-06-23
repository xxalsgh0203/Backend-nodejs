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
fs.promises.readdir(workingDir)
.then(processFiles)
.catch(console.log);

function processFiles(files){
    files.forEach(file => {
        if(isVideoFile(file))
            move(file, videoDir);
        else if(isCapturedFile(file))
            move(file, capturedDir);
        else if(isDuplicatedFile(files,file)){
            move(file, duplicatedDir);
        }
    })
}

function isVideoFile(file){
    if(path.extname(file) == '.mp4' || path.extname(file) == '.mov')
        return true;
}

function isCapturedFile(file){
    if(path.extname(file) == '.png' || path.extname(file) == '.aae')
        return true;
}

function isDuplicatedFile(files, file){
    // IMG_XXXX -> IMG_EXXX 로 수정된 파일이 있는지 확인
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E'))
        return false;
    
    const edited = `IMG_E${file.split('_')[1]}`;

    const found = files.find((f) => f.includes(edited));
    return !!found;
}

function move(file, filedirectory){
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(filedirectory, file);
    fs.promises.rename(oldPath, newPath).catch(console.error);
}