export default function filterInternships(internships, filters) {
  return Object.values(internships)?.filter((item) => {
    const titleMatch = item.title
      ?.toLowerCase()
      .includes(filters.profile.toLowerCase());

    const locations = item.work_from_home
      ? ["remote"]
      : item.location_names?.map((loc) => loc.toLowerCase()) || [];

    const locationMatch = filters.location
      ? locations.some((loc) => loc.includes(filters.location.toLowerCase()))
      : true;

    const durationMatch = filters.duration
      ? item.duration?.toLowerCase().includes(filters.duration.toLowerCase())
      : true;

    const stipendMatch = item.stipend?.salaryValue1 >= (filters.stipend || 0);

    const partTimeMatch = filters.partTime ? item.part_time === true : true;

    const workFromHomeMatch = filters.workFromHome
      ? item.work_from_home === true
      : true;

    const cityInternshipMatch = filters.cityInternship
      ? item.location_names?.some((loc) =>
          loc.toLowerCase().includes(filters.location.toLowerCase())
        )
      : true;

    const jobOfferMatch = filters.jobOffer ? item.is_ppo === true : true;

    const earlyApplicantMatch = filters.earlyApplicant
      ? item.application_status_message?.type === "high_applications"
      : true;

    const forWomenMatch = filters.forWomen
      ? item.labels_app_in_card?.some((label) =>
          label.toLowerCase().includes("women")
        )
      : true;

    const fastResponseMatch = filters.fastResponse
      ? item.application_status_message?.type === "fast_response"
      : true;

    const startDateMatch = filters.startDate
      ? new Date(item.start_date1) >= new Date(filters.startDate)
      : true;

    return (
      titleMatch &&
      locationMatch &&
      durationMatch &&
      stipendMatch &&
      partTimeMatch &&
      workFromHomeMatch &&
      cityInternshipMatch &&
      jobOfferMatch &&
      earlyApplicantMatch &&
      forWomenMatch &&
      fastResponseMatch &&
      startDateMatch
    );
  });
}
