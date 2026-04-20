# MML Asset Optimization Script
# Converts images to WebP and videos to WebM for production performance.
# Requirements: ffmpeg, magick (ImageMagick)

$AssetDir = "public/asset"
$LogFile = "scripts/optimization.log"

function Log-Message($msg) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    "$timestamp - $msg" | Out-File -FilePath $LogFile -Append
    Write-Host "$timestamp - $msg"
}

# Image Conversion (JPG, PNG, HEIC to WebP)
$ImageExtensions = @("*.jpg", "*.jpeg", "*.png", "*.heic", "*.HEIC")
foreach ($ext in $ImageExtensions) {
    $files = Get-ChildItem -Path $AssetDir -Filter $ext -Recurse
    foreach ($file in $files) {
        $destPath = $file.FullName -replace "\.(jpg|jpeg|png|heic|HEIC)$", ".webp"
        $lqPath = $file.FullName -replace "\.(jpg|jpeg|png|heic|HEIC)$", ".lq.webp"

        if (-not (Test-Path $destPath)) {
            Log-Message "Converting $($file.Name) to HQ WebP..."
            magick convert "$($file.FullName)" -quality 85 "$destPath"
        }

        if (-not (Test-Path $lqPath)) {
            Log-Message "Generating LQ WebP for $($file.Name)..."
            magick convert "$($file.FullName)" -quality 20 -resize 400x400`> "$lqPath"
        }
    }
}

# Video Conversion (MP4 to WebM)
$VideoFiles = Get-ChildItem -Path "$AssetDir/vid" -Filter "*.mp4" -Recurse
foreach ($file in $VideoFiles) {
    $destPath = $file.FullName -replace "\.mp4$", ".webm"
    if (-not (Test-Path $destPath)) {
        Log-Message "Converting $($file.Name) to WebM..."
        ffmpeg -i "$($file.FullName)" -c:v libvpx-vp9 -crf 30 -b:v 0 -an "$destPath" -y
    }
}

Log-Message "Optimization Complete."
