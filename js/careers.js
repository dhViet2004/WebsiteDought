function showJobDetails(jobId) {
    // Hide all job details
    const jobDetails = document.querySelectorAll(".job-details");
    jobDetails.forEach((detail) => {
        detail.classList.add("hidden");
    });

    // Show the selected job detail
    const selectedJob = document.getElementById(`${jobId}-details`);
    if (selectedJob) {
        selectedJob.classList.remove("hidden");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".job-opening-link");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Loại bỏ class 'active' khỏi tất cả các button
            buttons.forEach(btn => btn.classList.remove("active"));

            // Thêm class 'active' vào button được click
            this.classList.add("active");
        });
    });
});