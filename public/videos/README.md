# Video Assets

## hero-bg.mp4

Place your hero background video here with the following specifications:

- **Format**: MP4 (H.264 codec recommended)
- **Resolution**: 1920x1080 (Full HD) minimum
- **File size**: < 5MB (optimize for web)
- **Duration**: 10-15 seconds (looping)
- **Content**: Cinematic AI-themed visuals

### Optimization Tips:
1. Use HandBrake or FFmpeg to compress
2. Remove audio track (video will be muted)
3. Consider using WebM format for better compression
4. Ensure smooth loop points

### Example FFmpeg command:
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -vf scale=1920:1080 -an -movflags +faststart hero-bg.mp4
```