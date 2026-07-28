from PIL import Image, ImageChops

def trim(im):
    bg = Image.new("RGB", im.size, (255, 255, 255))
    diff = ImageChops.difference(im.convert("RGB"), bg)
    bbox = diff.getbbox()
    if bbox:
        padding = 20
        left, upper, right, lower = bbox
        
        # Hitung lebar dan tinggi hasil potongan
        width = right - left
        height = lower - upper
        size = max(width, height)
        
        # Buat agar potongannya berbentuk persegi sempurna
        new_left = left - (size - width) // 2
        new_upper = upper - (size - height) // 2
        new_right = new_left + size
        new_lower = new_upper + size
        
        # Berikan jarak aman (padding)
        new_left = max(0, new_left - padding)
        new_upper = max(0, new_upper - padding)
        new_right = min(im.size[0], new_right + padding)
        new_lower = min(im.size[1], new_lower + padding)
        
        return im.crop((new_left, new_upper, new_right, new_lower))
    return im

try:
    print("Membuka logo aslinya...")
    img = Image.open('src/assets/logo.png')
    
    print("Memotong bagian putih yang kosong...")
    cropped = trim(img)
    
    print("Menyimpan logo persegi untuk Favicon Google...")
    cropped_square = cropped.resize((512, 512), Image.Resampling.LANCZOS)
    cropped_square.save('public/favicon.png')
    
    print("Menyimpan kembali ke file sumber...")
    cropped.save('src/assets/logo.png')
    
    print("Berhasil!")
except Exception as e:
    print(f"Error: {e}")
