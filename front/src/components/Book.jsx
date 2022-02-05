import React, { useContext } from "react";
import { AppDataContext } from "../store/appData";

export const Book = ({ compare }) => {
	const { appData, userData } = useContext(AppDataContext);
	let bibleIndex = appData.bibleList.findIndex((x) =>
		compare ? x.link === userData.compare : x.link === userData.bible 
	);
	return (
		<div className="glassbox readbox flexMe flexCol">
			<h1 className="readboxTitle">
				{appData.bibleList[bibleIndex]?.name}
			</h1>
			<div className="readboxBody">
				<p>
					Praesent eu bibendum justo. Donec a massa ut lectus aliquam
					ullamcorper. Morbi vehicula eu neque vel feugiat. Aliquam
					orci lorem, tempus sit amet massa at, semper sodales quam.
					Proin luctus tincidunt rhoncus. Fusce ultrices urna non
					mauris imperdiet ultrices. Praesent ac interdum elit. Morbi
					tempor venenatis commodo.
				</p>
				<p>
					Praesent non vestibulum ipsum, a feugiat odio. In nec
					ultrices leo, eu tincidunt turpis. Maecenas hendrerit lacus
					eget leo dignissim tempor. Aliquam sem nisi, lobortis quis
					malesuada non, faucibus in erat. Curabitur eu posuere nisl.
					Fusce congue tortor nec porta convallis. Quisque volutpat
					eros elit, a tempus magna dignissim sit amet. Curabitur
					luctus elementum odio id hendrerit. Nam vel sapien ut velit
					vulputate rutrum.
				</p>
				<p>
					Vivamus posuere elementum est, ut suscipit nunc commodo eu.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nullam id pharetra massa. Praesent faucibus sodales
					pharetra. Mauris aliquet mattis nulla, et maximus tortor
					iaculis eu. Praesent dignissim lorem diam, nec auctor tortor
					tincidunt quis. Sed venenatis magna a facilisis rutrum.
					Morbi mollis nisi pulvinar dui ornare maximus. In vitae
					pharetra tellus. Nunc eu dolor et massa vulputate venenatis
					quis vitae leo. Morbi tempus eu velit nec ultrices. Sed ut
					lectus ante. Aliquam erat volutpat. Pellentesque in dapibus
					libero.
				</p>
				<p>
					Nam eu laoreet nunc. Aliquam sodales aliquet consequat. In
					facilisis vitae dolor eu volutpat. Pellentesque mollis augue
					at lacus dignissim tempor. Pellentesque sollicitudin
					molestie nibh vel sollicitudin. Sed feugiat elit maximus
					turpis elementum, sit amet efficitur est lacinia. Phasellus
					eu ultricies massa. Mauris porttitor ex ac dolor fringilla,
					sit amet venenatis sem porttitor. Proin et faucibus arcu.
					Fusce auctor velit sed ipsum blandit, a ultricies nisi
					sagittis. Praesent egestas tempus lacus, eu placerat ligula
					rutrum et. Curabitur dictum convallis lectus sit amet
					feugiat. Praesent et sapien vitae velit vestibulum accumsan
					a non eros. Etiam eget finibus leo. Quisque vehicula enim at
					purus viverra sollicitudin.
				</p>
				<p>
					Ut quis est eu neque dapibus ultricies eget non nisl. Duis
					ultrices varius odio. Vivamus porttitor nunc felis, ac
					maximus erat rutrum et. In dignissim efficitur nibh eget
					consequat. Maecenas semper accumsan imperdiet. Nulla
					facilisi. Class aptent taciti sociosqu ad litora torquent
					per conubia nostra, per inceptos himenaeos. Vestibulum
					sagittis venenatis ante sed scelerisque. Integer
					pellentesque pharetra urna et fringilla. Donec venenatis
					maximus diam a vehicula. Nulla ultricies lacinia augue, eu
					semper risus ultricies a. Integer semper elit sit amet ex
					sollicitudin, sed laoreet eros auctor. Vestibulum in sem et
					massa vestibulum consequat. Phasellus lobortis erat at nisi
					imperdiet dictum vel non mauris. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Fusce dictum venenatis eros tincidunt
					tincidunt.
				</p>
				<p>
					Ut mauris justo, dignissim ac massa eu, sagittis ultrices
					neque. Sed efficitur, est ac molestie consectetur, dui ex
					maximus mi, vitae viverra mauris turpis pellentesque lacus.
					Praesent pretium interdum ante, sit amet lacinia diam. Cras
					malesuada lorem quis est semper, et rutrum diam finibus.
					Aliquam sit amet egestas libero, id interdum lorem.
					Vestibulum a metus at enim tincidunt euismod non vel ante.
					Nullam eu efficitur libero. Nulla facilisi. Suspendisse
					potenti. Mauris sollicitudin vehicula fermentum. Proin
					vulputate, mi id tristique malesuada, erat nisl condimentum
					lectus, id vehicula erat augue blandit felis. Vivamus
					vestibulum placerat sapien non rutrum. Proin tristique odio
					pharetra neque congue pharetra. Curabitur eget accumsan
					quam. Nulla vitae risus a metus consectetur sagittis ut a
					massa. Mauris fringilla libero mauris, a semper purus
					ullamcorper pellentesque.
				</p>
				<p>
					Integer facilisis nec lacus quis interdum. Nullam porta
					tortor eget metus blandit, in luctus dui tristique. Cras
					venenatis tellus eu accumsan volutpat. Cras faucibus nulla
					at sem cursus, et viverra ipsum bibendum. Donec vel orci
					enim. Fusce volutpat quam leo, quis aliquet dui interdum
					sed. Etiam fermentum, magna cursus porta pretium, tellus sem
					elementum elit, ut dignissim lectus quam id ante. Nunc et
					dui rhoncus, gravida sapien tempor, placerat tortor. Etiam
					in consectetur dui. Curabitur fermentum semper risus, a
					tincidunt lectus gravida sed. Fusce id sagittis ante.
					Maecenas posuere eleifend risus sed mollis. In ultricies
					eleifend odio, et viverra tortor lobortis a. Phasellus
					congue felis neque, id rhoncus mauris ullamcorper sed.
					Praesent eleifend tortor vel urna lacinia congue. Sed
					volutpat, lorem vel mattis ultrices, dolor orci gravida
					nulla, rhoncus ultricies magna lacus ut metus.
				</p>
				<p>
					Quisque erat tortor, porta in lacus at, sodales faucibus
					massa. Praesent rutrum, urna ac viverra pharetra, justo
					metus consectetur nisi, et eleifend dolor lacus in elit.
					Quisque mollis sagittis felis, eu lacinia ipsum tempus quis.
					Sed augue justo, mattis eu fringilla condimentum, tristique
					ac est. Sed luctus est vel velit finibus volutpat. Phasellus
					iaculis odio quis leo rutrum molestie et quis neque. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit. Mauris
					vehicula ultrices elementum. Phasellus dignissim arcu a
					imperdiet ultrices. Donec eget molestie enim, eu cursus
					odio. Aenean iaculis et tortor auctor tempor.
				</p>
				<p>
					Nunc iaculis justo mi, sit amet varius mauris varius et.
					Donec fringilla blandit maximus. Morbi ipsum orci, varius
					quis sem eget, fringilla consectetur est. Proin a tincidunt
					risus, vel congue nulla. Morbi nec tincidunt ligula, eu
					rhoncus ligula. Morbi euismod nibh convallis, ullamcorper mi
					a, mattis nulla. Sed molestie elit id est tempor lobortis.
					Vivamus tempor dui justo, sollicitudin condimentum quam
					laoreet ac. Mauris pellentesque sapien in mi suscipit, non
					malesuada tortor efficitur. Donec eu quam vitae ipsum
					faucibus auctor. Pellentesque vitae condimentum ex, sit amet
					pretium magna.
				</p>
				<p>
					Donec imperdiet, nulla at rutrum vehicula, nulla ligula
					condimentum metus, vitae semper mauris metus id sapien.
					Nulla a tortor a leo ornare fringilla ac et neque.
					Suspendisse fringilla lectus maximus, tincidunt magna eget,
					sagittis nulla. Aliquam elementum purus in turpis ornare, id
					suscipit urna tempus. Nullam tempor lorem sapien, ut
					ultrices nibh suscipit et. Suspendisse semper eros non augue
					sagittis consectetur. Integer velit leo, dignissim ac
					tincidunt a, cursus ac mauris. In hac habitasse platea
					dictumst. Nullam dignissim neque risus, at sollicitudin
					tellus pharetra nec. Sed fringilla malesuada pharetra.
					Aenean dictum risus nec turpis vestibulum, non tempus erat
					vulputate. Morbi finibus lacus lectus, eu feugiat diam
					sodales at. Nullam at quam et lorem eleifend pretium. Morbi
					at volutpat sem. Cras ullamcorper suscipit ante, eget
					elementum velit auctor aliquam. In vehicula justo ac tellus
					rutrum, eget vestibulum dolor suscipit.
				</p>
				<p>
					Fusce iaculis pharetra arcu, id tempus nibh laoreet quis.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Quisque ultrices facilisis est sit amet euismod. In
					tincidunt ac tortor lobortis viverra. Fusce viverra nec est
					vitae imperdiet. Praesent placerat quam diam, eu dignissim
					dolor aliquam ac. Quisque vitae sem vitae enim vestibulum
					bibendum et vitae mauris. Mauris aliquet nulla eu interdum
					porta. Praesent tincidunt eu purus ac rutrum. Nam aliquam
					tempor tempus. Fusce magna velit, semper eu ultrices id,
					efficitur at nunc. Quisque ac metus vitae nisi iaculis
					elementum et ut purus. Duis dignissim felis id lacinia
					aliquet. Fusce ullamcorper eros vitae nibh cursus
					vestibulum.
				</p>
				<p>
					Vestibulum finibus gravida nulla a semper. Praesent et neque
					consequat, lacinia ligula at, tincidunt massa. Cras
					condimentum nisl at euismod porttitor. Ut eget erat porta,
					dictum nunc nec, aliquam velit. Duis laoreet pharetra
					elementum. Vestibulum ante ipsum primis in faucibus orci
					luctus et ultrices posuere cubilia curae; Sed diam odio,
					imperdiet in neque sed, condimentum luctus ante. Nunc enim
					nunc, consectetur nec augue sed, accumsan cursus ipsum.
				</p>
				<p>
					Praesent vulputate feugiat lectus id eleifend. Maecenas leo
					velit, vulputate eu rutrum quis, finibus et nisl. Phasellus
					sollicitudin arcu odio, a pellentesque velit sollicitudin
					eget. Suspendisse condimentum justo ut eros lacinia, in
					porta magna eleifend. Mauris odio lectus, lacinia eget massa
					vulputate, sollicitudin tincidunt elit. Morbi tempus nunc
					nibh, rhoncus porttitor sapien rutrum eget. In sollicitudin
					libero at vehicula dictum. Praesent lacinia fringilla
					malesuada. Suspendisse eget tempus enim, in ultricies
					mauris. Sed eu egestas sem. Quisque at libero scelerisque,
					hendrerit nibh pulvinar, malesuada lectus. Quisque imperdiet
					tempus dolor in imperdiet. In venenatis odio volutpat est
					scelerisque luctus.
				</p>
				<p>
					Integer in tortor vel enim auctor volutpat quis quis nisl.
					Maecenas posuere urna at laoreet iaculis. Donec euismod eget
					arcu et ornare. Mauris vel molestie ex. In non faucibus
					ipsum. Suspendisse viverra orci vel urna efficitur dictum.
					Nullam volutpat quam non tellus dapibus, eu blandit nunc
					commodo. Sed quis pellentesque erat. Integer vitae libero
					bibendum, maximus massa id, vestibulum felis. Maecenas enim
					mi, suscipit vitae ipsum quis, cursus blandit ex. In et
					mattis mauris. Vivamus ultrices rhoncus ligula, vulputate
					ornare massa faucibus imperdiet. Praesent fermentum nisi
					libero, a rhoncus leo sollicitudin nec. Nam lacinia magna
					lacus, at fermentum est porttitor nec. Aliquam vel laoreet
					purus, eu semper magna.
				</p>
				<p>
					Etiam fermentum sagittis nisi, aliquet tincidunt ante tempus
					vel. Duis lectus leo, placerat vitae justo non, hendrerit
					faucibus odio. Integer fermentum congue orci, vel suscipit
					magna tempus id. Proin pulvinar sagittis venenatis.
					Curabitur ac elit ornare est posuere lacinia vitae sed diam.
					Donec porta libero dui, vel tincidunt odio ultricies at.
					Nullam iaculis nisl mi, ac tempor arcu ultrices nec. Mauris
					suscipit imperdiet urna et tincidunt.
				</p>
				<p>
					Phasellus sed tristique libero, a luctus nulla. Fusce ac
					neque ut massa aliquam ultrices pharetra id massa. Vivamus
					augue nisl, volutpat non placerat eget, consequat nec ante.
					Mauris imperdiet, nisl non tempus viverra, turpis augue
					molestie dolor, ut malesuada nulla elit at ante.
					Pellentesque fermentum nulla elementum ipsum rhoncus
					fringilla. Fusce neque turpis, sagittis vitae quam eget,
					faucibus luctus sem. Etiam ultrices tincidunt lobortis.
					Praesent commodo justo nisl, at laoreet nisl faucibus id.
					Orci varius natoque penatibus et magnis dis parturient
					montes, nascetur ridiculus mus. Nullam semper tempor orci
					non commodo. Integer ullamcorper volutpat eros, vel
					fermentum ex hendrerit eu.
				</p>
				<p>
					Class aptent taciti sociosqu ad litora torquent per conubia
					nostra, per inceptos himenaeos. Aliquam erat volutpat.
					Aliquam tincidunt tincidunt cursus. Suspendisse et egestas
					sapien. Donec egestas mi vitae metus imperdiet, eu euismod
					nisl varius. Fusce lorem velit, porttitor in orci sed,
					dapibus volutpat elit. Vestibulum tristique leo metus, ac
					rutrum justo consectetur id. Aliquam euismod lacus dui. Orci
					varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus.
				</p>
				<p>
					Praesent rutrum risus a dolor congue, in finibus augue
					luctus. Quisque convallis sem ac magna pretium fermentum.
					Phasellus eget lectus maximus, blandit elit eu, efficitur
					elit. Vestibulum aliquam, mi non semper dictum, nisl turpis
					aliquam nulla, volutpat elementum justo metus non dolor.
					Integer tristique fringilla vulputate. Integer eget enim
					velit. Mauris tincidunt accumsan blandit. Quisque lacus mi,
					maximus id vehicula sed, posuere nec massa.
				</p>
				<p>
					Aliquam ut pellentesque purus, nec blandit metus.
					Pellentesque sed neque quis est euismod bibendum. In mollis
					fermentum velit, vitae pulvinar sapien tincidunt sed. Fusce
					malesuada interdum est, non pretium augue scelerisque eget.
					Aliquam et molestie leo. Etiam in mollis mauris. Curabitur
					id neque vel lorem dapibus iaculis. In consectetur
					sollicitudin magna, nec bibendum ligula egestas in.
				</p>
				<p>
					Proin sagittis, mauris eget laoreet lobortis, massa dolor
					dignissim nunc, non consectetur metus dolor a orci. Ut
					mattis, magna ut rhoncus ornare, metus sem interdum enim,
					sit amet porta ante tortor eget neque. Aenean congue
					malesuada molestie. Sed scelerisque, ante sit amet interdum
					porta, nisi risus aliquam libero, a convallis magna elit
					egestas mi. Praesent quis augue id lectus ultricies maximus
					blandit et nibh. Etiam sapien enim, iaculis sit amet orci
					sed, lacinia fringilla odio. Curabitur consectetur sit amet
					massa id sodales. In tincidunt elit nisl, sit amet maximus
					felis gravida et. Duis malesuada, urna ac pretium molestie,
					ligula neque consectetur tortor, non aliquam risus diam at
					neque. Proin odio dui, hendrerit non faucibus at, porttitor
					id sem. Duis gravida, velit sit amet cursus euismod, nulla
					augue rutrum mi, auctor finibus ante mauris et nibh. Sed
					mattis velit id sem vestibulum bibendum. Phasellus egestas
					vestibulum pretium.
				</p>
			</div>
		</div>
	);
};
