<script lang="ts">
	interface WorkExperience {
		jobTitle: string;
		company: string;
		startDate: string;
		endDate?: string;
	}

	const workExperience: WorkExperience[] = [
		{
			jobTitle: 'Front-End Developer',
			company: 'HUBBY eSIM',
			startDate: '11/2024'
		},
		{
			jobTitle: 'WordPress Developer',
			company: 'Inventive',
			startDate: '11/2024'
		},
		{
			jobTitle: 'Web Development Intern',
			company: 'Moxelle',
			startDate: '08/2024',
			endDate: '10/2024'
		},
		{
			jobTitle: 'Digital Marketing Specialist',
			company: '6Pro Marketing',
			startDate: '11/2021',
			endDate: '07/2024'
		}
	];
</script>

<section class="default-margin work-experience mt-m">
	<ul class="work-experience-list">
		{#each workExperience as job}
			<li class="work-item">
				<article>
					<h3 class="semi-bold mb-xs">{job.jobTitle}</h3>
					<div class="company-and-date">
						<p>{job.company}</p>
						<p class="dark-grey">
							{job.startDate}
							{#if job.endDate}
								- {job.endDate}
							{:else}
								- present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
	<h2 class="headline">Past Work <br /> Experience</h2>
</section>

<style>
	.work-experience {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.work-experience-list {
		width: 50%;
	}

    .headline {
        text-align: right;
    }

	.work-item {
		border-bottom: 1px solid #f0eded;
		padding-bottom: 12px;
	}

	.work-item:not(:first-of-type) {
        padding-top: 16px;
    }

    .work-item p {
        margin-bottom: 0;
    }

	.company-and-date {
		display: flex;
		justify-content: space-between;
	}
</style>
