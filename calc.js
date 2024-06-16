function calculatePercentage() {
    const marksObtained = parseFloat(document.getElementById('marksObtained').value);
    const totalMarks = parseFloat(document.getElementById('totalMarks').value);
    const result = document.getElementById('result');

    if (!isNaN(marksObtained) && !isNaN(totalMarks) && totalMarks > 0) {
        const percentage = (marksObtained / totalMarks) * 100;
        result.textContent = `Percentage: ${percentage.toFixed(2)}%`;
    } else {
        result.textContent = 'Please enter valid numbers for both marks obtained and total marks.';
    }
}
    console.log("percentage");