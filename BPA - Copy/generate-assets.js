const fs = require('fs');
const path = require('path');

// Create a simple PNG file header for a 1x1 blue pixel
function createSimplePNG(width, height, color = [31, 118, 210, 255]) { // Blue color
    const png = Buffer.alloc(8 + 25 + 12); // PNG header + IHDR + IEND
    let offset = 0;

    // PNG signature
    png.writeUInt32BE(0x89504E47, offset); offset += 4;
    png.writeUInt32BE(0x0D0A1A0A, offset); offset += 4;

    // IHDR chunk
    png.writeUInt32BE(13, offset); offset += 4; // length
    png.write('IHDR', offset); offset += 4;
    png.writeUInt32BE(width, offset); offset += 4;
    png.writeUInt32BE(height, offset); offset += 4;
    png.writeUInt8(8, offset); offset += 1; // bit depth
    png.writeUInt8(2, offset); offset += 1; // color type (RGB)
    png.writeUInt8(0, offset); offset += 1; // compression
    png.writeUInt8(0, offset); offset += 1; // filter
    png.writeUInt8(0, offset); offset += 1; // interlace
    png.writeUInt32BE(0xCBE5D2E5, offset); offset += 4; // CRC

    // IEND chunk
    png.writeUInt32BE(0, offset); offset += 4; // length
    png.write('IEND', offset); offset += 4;
    png.writeUInt32BE(0xAE426082, offset); // CRC

    return png;
}

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
}

// Create assets
const icon = createSimplePNG(1024, 1024);
const splash = createSimplePNG(1242, 2208);
const adaptiveIcon = createSimplePNG(1024, 1024);
const favicon = createSimplePNG(32, 32);

fs.writeFileSync(path.join(assetsDir, 'icon.png'), icon);
fs.writeFileSync(path.join(assetsDir, 'splash.png'), splash);
fs.writeFileSync(path.join(assetsDir, 'adaptive-icon.png'), adaptiveIcon);
fs.writeFileSync(path.join(assetsDir, 'favicon.png'), favicon);

console.log('Assets created successfully!');
