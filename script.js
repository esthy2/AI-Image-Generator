document.getElementById('generateImage').addEventListener('click', async function() {
    const prompt = document.getElementById('promptInput').value;
    if (!prompt) {
        alert("Please enter a prompt.");
        return;
    }

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = "<p>Generating image...</p>";

    try {
        // Replace with actual AI API call (Example: OpenAI DALL·E API)
        const response = await fetch(`https://api.dummyimagegenerator.com/generate?prompt=${encodeURIComponent(prompt)}`);
        const data = await response.json();
        
        // Display image
        imageContainer.innerHTML = `<img id="generatedImage" src="${data.image_url}" alt="Generated Image">`;
        
        // Show download button
        document.getElementById('downloadImage').style.display = "block";
    } catch (error) {
        imageContainer.innerHTML = "<p>Error generating image. Try again.</p>";
    }
});

// Download Image
document.getElementById('downloadImage').addEventListener('click', function() {
    const img = document.getElementById('generatedImage');
    if (img) {
        const a = document.createElement('a');
        a.href = img.src;
        a.download = "generated_image.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
});
