export default function StudyPlanCards() {

    return (

        <>

            <div className="card bg-transparent" style={{ border: "1px solid #E0D9DE" }}>
                <div className="card-body pt-0 px-2">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center me-3">
                            <div className="flex-shrink-0">
                                <div className="mt-3 mx-auto d-flex justify-content-center align-items-center" style={{ backgroundColor: "#EBDEEA", width: '50px', height: '50px', borderRadius: '50%' }}>
                                    <span style={{ fontWeight: "600", fontSize: "14px", fontFamily: "Fredoka, sans-serif" }}>
                                        <span className="me-1" style={{ color: "#65CB7C", fontSize: "13px" }}>A</span>
                                        <span style={{ color: "#E04345", fontSize: "13px" }}>301</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-3 mt-3">
                                <div className="row row-cols-1">
                                    <div className="col">
                                        <span style={{ fontSize: "14px", fontFamily: "Fredoka, sans-serif", fontWeight: "500" }}>Anatomy of Head And ...</span>
                                    </div>
                                    <div className="col">
                                        <span className="text-muted" style={{ fontSize: "12px", fontFamily: "Fredoka, sans-serif" }}>10 Modules</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <div className="row row-cols-1">
                                <div className="col mb-3 ms-2">
                                    <div class="dropdown">
                                        <i className="bi bi-three-dots-vertical" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Edit</a></li>
                                            <li><a class="dropdown-item" href="#">Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <span class="badge rounded-pill text-bg-success" style={{ fontSize: "8px" }}>100l</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )

}